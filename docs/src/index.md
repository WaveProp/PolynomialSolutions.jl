```@meta
CurrentModule = PolynomialSolutions
```

# PolynomialSolutions

Generate polynomial solutions to certain PDEs given a polynomial source term.

## Helmholtz equation

The function [`solve_helmholtz`](@ref) takes a [`Polynomial`](@ref) `Q` and
returns the unique [`Polynomial`](@ref) `P` satisfying

```math
    \Delta P + P = Q
```

Some solutions in 2D:

```@example
using PolynomialSolutions
for j in 0:4, i in 0:4
    Q = monomial(i,j)
    P = solve_helmholtz(Q)
    @show P, Q
end
```

And some solutions in 3D:

```@example
using PolynomialSolutions
for k in 0:4, j in 0:4, i in 0:4
    Q = monomial(i,j,k)
    P = solve_helmholtz(Q)
    @show P, Q
end
```

## Laplace

!!! warning "Missing"
    TODO

## Docstrings

```@autodocs
Modules = [PolynomialSolutions]
```