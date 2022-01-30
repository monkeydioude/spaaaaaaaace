import Context from "../../Canvas/Context";
import Block from "./Block";

export default class Text extends Block {
    protected lines: string[] = []
    
    addLine(text: string): Text {
        this.lines.push(text);
        return this;
    }

    setLines(lines: string[]): Text {
        this.lines = lines;
        return this;
    }

    shouldBreakLine(width: number, line: string, ctx: Context): boolean {
        return ctx.context.measureText(line).width > width;
    }

    breakLine(width: number, line: string, ctx: Context): string[] {
        if (!this.shouldBreakLine(width, line, ctx)) {
            return [];
        }
        let lines: string[] = [];
        // break for /n
        line.split("\n").forEach((l: string) => {
            // full size of line
            const textWidth = ctx.context.measureText(l).width;
            // size of a character, rounded to closest greater integer
            const charS = Math.ceil(textWidth / l.length);
            // number of char per line, rounded to the closest lower integer
            const charPerLine = Math.floor(width / charS);
            // relative width, using above approximations
            const relativeWidth = charPerLine * charS;
            // number of lines we should break into.
            // min(n) = 1;
            const n = Math.ceil(textWidth / relativeWidth);
            // cycle over number of lines
            for (let i = 0; i < n; i++) {
                lines.push(l.slice(charPerLine*i, charPerLine*(i+1)));
            }
        })

        return lines;
    }

    writeLines(
        lines: string[],
        x: number,
        y: number,
        w: number,
        h: number,
        fontSize: number,
        color: string,
        fontFamily: string,
        iOverload: number,
        ctx: Context
    ) {
        lines.forEach((line: string, i: number) => {
            const bl = this.breakLine(w, line, ctx);
            if (bl.length > 0) {
                this.writeLines(
                    bl,
                    x,
                    y,
                    w,
                    h,
                    fontSize,
                    color,
                    fontFamily,
                    i + iOverload,
                    ctx
                );
                // -1 because the "i" of this iteration was not used to write a
                // line as it should (canvasY under), but as an overload value
                // to write broken lines. And "i" will still increment by 1
                // because of forEach.
                // And since iOverload is used under to compute canvasY, we
                // can cancel that empty "i" iteration here.
                iOverload += bl.length - 1;
                return;
            }
            const canvasY = y + (fontSize * (i + iOverload));
            const canvasX = x;
            ctx.write(line, canvasX, canvasY, color, fontSize, fontFamily);
        });
    }

    draw(ctx: Context) {
        // canvasTxt.fontSize = this.getFontSize();
        const {x, y} = this.getCoordinates();
        const {x: w, y: h} = this.getSizes();

        this.writeLines(this.lines, x, y, w, h, this.getFontSize(), this.getColor(), "Verdana", 0, ctx);
    }
}