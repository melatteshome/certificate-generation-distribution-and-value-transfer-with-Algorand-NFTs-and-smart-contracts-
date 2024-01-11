import beaker as bk
import pyteal as pt


app = bk.Application("smart_certificate")


@app.external
def hello(name: pt.abi.String, *, output: pt.abi.String) -> pt.Expr:
    return output.set(pt.Concat(pt.Bytes("Hello, "), name.get()))

if __name__ == "__main__":
    spec= app.build()
    spec.export("artifacts")