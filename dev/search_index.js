var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = PolynomialSolutions","category":"page"},{"location":"#PolynomialSolutions","page":"Home","title":"PolynomialSolutions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Generate polynomial solutions to certain PDEs given a polynomial source term.","category":"page"},{"location":"#Helmholtz","page":"Home","title":"Helmholtz","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The function solve_helmholtz takes a Polynomial Q and returns the unique Polynomial P satisfying","category":"page"},{"location":"","page":"Home","title":"Home","text":"    Delta P + P = Q","category":"page"},{"location":"","page":"Home","title":"Home","text":"Some solutions in 2D:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using PolynomialSolutions\nfor j in 0:4, i in 0:4\n    Q = monomial(i,j)\n    P = solve_helmholtz(Q)\n    @show P, Q\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"And some solutions in 3D:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using PolynomialSolutions\nfor k in 0:4, j in 0:4, i in 0:4\n    Q = monomial(i,j,k)\n    P = solve_helmholtz(Q)\n    @show P, Q\nend","category":"page"},{"location":"#Laplace","page":"Home","title":"Laplace","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The function solve_laplace takes a Polynomial Q and returns a Polynomial P satisfying","category":"page"},{"location":"","page":"Home","title":"Home","text":"    Delta P = Q","category":"page"},{"location":"","page":"Home","title":"Home","text":"Some solutions in 2D:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using PolynomialSolutions\nfor j in 0:4, i in 0:4\n    Q = monomial(i,j)\n    P = solve_laplace(Q)\n    @show P, Q\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"And some solutions in 3D:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using PolynomialSolutions\nfor k in 0:4, j in 0:4, i in 0:4\n    Q = monomial(i,j,k)\n    P = solve_laplace(Q)\n    @show P, Q\nend","category":"page"},{"location":"#Bi-Laplace","page":"Home","title":"Bi-Laplace","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The function solve_bilaplace takes a Polynomial Q and returns a Polynomial P satisfying","category":"page"},{"location":"","page":"Home","title":"Home","text":"    Delta^2 P = Q","category":"page"},{"location":"","page":"Home","title":"Home","text":"Some solutions in 2D:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using PolynomialSolutions\nfor j in 0:4, i in 0:4\n    Q = monomial(i,j)\n    P = solve_bilaplace(Q)\n    @show P, Q\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"And some solutions in 3D:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using PolynomialSolutions\nfor k in 0:4, j in 0:4, i in 0:4\n    Q = monomial(i,j,k)\n    P = solve_bilaplace(Q)\n    @show P, Q\nend","category":"page"},{"location":"#Stokes","page":"Home","title":"Stokes","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The function solve_stokes takes an NTuple of Polynomials Q and returns two Polynomials, U and P, satisfying","category":"page"},{"location":"","page":"Home","title":"Home","text":"    beginalign*\n        Delta U - nabla P = Q \n        nabla cdot U = 0\n    endalign*","category":"page"},{"location":"","page":"Home","title":"Home","text":"using PolynomialSolutions\nQ   = (monomial(1,0),monomial(0,0))\nU,P = solve_stokes(Q)\n@show U,P","category":"page"},{"location":"#Docstrings","page":"Home","title":"Docstrings","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Modules = [PolynomialSolutions]","category":"page"},{"location":"#PolynomialSolutions.Polynomial","page":"Home","title":"PolynomialSolutions.Polynomial","text":"struct Polynomial{N,T}\n\nA polynomial in N variables with coefficients of type T.\n\n\n\n\n\n","category":"type"},{"location":"#PolynomialSolutions.degree-Union{Tuple{Polynomial{N, T}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Home","title":"PolynomialSolutions.degree","text":"degree(p::Polynomial)\n\nThe largest degree of any monomial in p.\n\n\n\n\n\n","category":"method"},{"location":"#PolynomialSolutions.derivative-Union{Tuple{T}, Tuple{N}, Tuple{Polynomial{N, T}, Any}} where {N, T}","page":"Home","title":"PolynomialSolutions.derivative","text":"derivative(p::Polynomial, i::Int)\n\nDifferentiate p with respect to the ith variable.\n\n\n\n\n\n","category":"method"},{"location":"#PolynomialSolutions.gradient-Union{Tuple{Polynomial{N, T}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Home","title":"PolynomialSolutions.gradient","text":"gradient(p::Polynomial)\n\nReturn an N-tuple of the derivatives of p with respect to each variable.\n\n\n\n\n\n","category":"method"},{"location":"#PolynomialSolutions.multiply_by_r-Union{Tuple{T}, Tuple{N}, Tuple{Polynomial{N, T}, Int64}} where {N, T}","page":"Home","title":"PolynomialSolutions.multiply_by_r","text":"multiply_by_r(p::Polynomial, k::Int = 2)\n\nMultiply a polynomial p by the monomial r^k, where r = |𝐱| and k is an even positive integer.\n\n\n\n\n\n","category":"method"},{"location":"#PolynomialSolutions.solve_bilaplace-Union{Tuple{Polynomial{N}}, Tuple{N}} where N","page":"Home","title":"PolynomialSolutions.solve_bilaplace","text":"solve_bilaplace(Q::Polynomial)\n\nCompute a polynomial solution to Δ²P = Q.\n\n\n\n\n\n","category":"method"},{"location":"#PolynomialSolutions.solve_elastodynamics-Union{Tuple{StaticArraysCore.SArray{Tuple{N}, Polynomial{N, T}, 1, N}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Home","title":"PolynomialSolutions.solve_elastodynamics","text":"solve_elastodynamics(Q::SVector{N,Polynomial{N,T}};ρ=1,μ=1,ν=1/4,ω=1)\n\nCompute a vector of polynomials U satisfying -μ/(1-2ν) ∇(div U) - μ ΔU - μ k₂² U = Q.\n\n\n\n\n\n","category":"method"},{"location":"#PolynomialSolutions.solve_elastostatic-Union{Tuple{StaticArraysCore.SArray{Tuple{N}, Polynomial{N, T}, 1, N}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Home","title":"PolynomialSolutions.solve_elastostatic","text":"solve_elastostatic(Q::SVector{N,Polynomial{N,T}};μ=1,ν=1)\n\nCompute a vector of polynomials U satisfying μ/(1-2ν) ∇(div U) + μΔU = Q.\n\n\n\n\n\n","category":"method"},{"location":"#PolynomialSolutions.solve_helmholtz-Tuple{Polynomial, Any}","page":"Home","title":"PolynomialSolutions.solve_helmholtz","text":"solve_helmholtz(Q::Polynomial,k=1)\n\nReturn the unique polynomial P satisfying ΔP + k²P = Q.\n\n\n\n\n\n","category":"method"},{"location":"#PolynomialSolutions.solve_laplace-Union{Tuple{Polynomial{N, T}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Home","title":"PolynomialSolutions.solve_laplace","text":"solve_laplace(Q::Polynomial)\n\nReturn a polynomial P satisfying ΔP = Q.\n\n\n\n\n\n","category":"method"},{"location":"#PolynomialSolutions.solve_maxwell-Union{Tuple{T}, Tuple{N}, Tuple{StaticArraysCore.SArray{Tuple{N}, Polynomial{N, T}, 1, N}, Polynomial{N, T}}} where {N, T}","page":"Home","title":"PolynomialSolutions.solve_maxwell","text":"solve_maxwell(J::SVector{N,Polynomial{N,T}}, ρ::Polynomial{N, T};ϵ=1,μ=1,ω=1)\n\nCompute a pair of vectors of polynomials E and H satisfying the Maxwell system. Also returns the polynomial vector potential A and scalar potential φ.\n\n\n\n\n\n","category":"method"},{"location":"#PolynomialSolutions.solve_stokes-Union{Tuple{StaticArraysCore.SArray{Tuple{N}, Polynomial{N, T}, 1, N}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Home","title":"PolynomialSolutions.solve_stokes","text":"solve_stokes(Q::SVector{N,Polynomial{N,T}};μ=1)\n\nCompute a vector of polynomials U and a polynomial P satisfying μΔU - ∇P = Q with ∇ ⋅ U = 0.\n\n\n\n\n\n","category":"method"}]
}
