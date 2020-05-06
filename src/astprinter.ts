import { Visitor, Term, Abstraction, Application, Variable } from "./ast";

export class AstPrinter implements Visitor<string> {
    print(expr: Term): string {
        return expr.accept(this);
    }

    visitAbstraction(abstraction: Abstraction): string {
        return `(λ${abstraction.name}. ${abstraction.body.accept(this)})`;
    }
    visitApplication(application: Application): string {
        return `(${application.func.accept(this)} ${application.argument.accept(this)})`;
    }
    visitVariable(variable: Variable): string {
        return variable.name;
    }
}
