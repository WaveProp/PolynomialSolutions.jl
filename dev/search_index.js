var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = PolynomialSolutions","category":"page"},{"location":"#PolynomialSolutions","page":"Home","title":"PolynomialSolutions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Compute polynomial solutions to certain PDEs given a polynomial source term.","category":"page"},{"location":"#Overview","page":"Home","title":"Overview","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package provides functionality for solving","category":"page"},{"location":"","page":"Home","title":"Home","text":"    mathcalLP = Q","category":"page"},{"location":"","page":"Home","title":"Home","text":"where Q is a source term of Polynomial type (or a NTuple of polynomials for vector-valued problems), P is the sought polynomial solution, and mathcalL is a certain (linear) constant coefficient differential operator.","category":"page"},{"location":"","page":"Home","title":"Home","text":"A typical use case consists of creating a polynomial Q","category":"page"},{"location":"","page":"Home","title":"Home","text":"using PolynomialSolutions;\nQ = Polynomial([(1,2)=>2, (3,0)=>-1])","category":"page"},{"location":"","page":"Home","title":"Home","text":"and calling the desired method to obtain P:","category":"page"},{"location":"","page":"Home","title":"Home","text":"P = solve_helmholtz(Q;k=1)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Note that P can be used as function:","category":"page"},{"location":"","page":"Home","title":"Home","text":"P((0.1,0.2)) # functor interface","category":"page"},{"location":"","page":"Home","title":"Home","text":"The following PDEs are currently implemented (see their specific Docstrings for further details):","category":"page"},{"location":"","page":"Home","title":"Home","text":"solve_laplace\nsolve_helmholtz\nsolve_bilaplace\nsolve_stokes\nsolve_elastostatic\nsolve_elastodynamics\nsolve_maxwell","category":"page"},{"location":"#Coefficient-type,-precision,-and-conversions","page":"Home","title":"Coefficient type, precision, and conversions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The type of coefficients in the polynomial solution P is inferred from both the type of the coefficients of the input polynomial Q, and from the parameter types (e.g. the type of k in solve_helmholtz). In the presence of floating point errors, this means that the computed coefficients may be inexact:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using PolynomialSolutions;\nQ = Polynomial((2,2)=>1)\nP = solve_helmholtz(Q;k=3)","category":"page"},{"location":"","page":"Home","title":"Home","text":"The recursive algorithm in solve_helmholtz performs repeated divisions by k²; thus, passing a rational types yields an exact result in this case:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Q = Polynomial((3,2)=>big(1//1))\nP = solve_helmholtz(Q;k=3//1)","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can still convert the coefficients back to e.g. a floating point type:","category":"page"},{"location":"","page":"Home","title":"Home","text":"convert(Polynomial{2,Float64},P)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Alternatively, you can use intervals to obtain rigorous bounds on the coefficients:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using IntervalArithmetic\nQ = Polynomial((3,2)=>1)\nP = solve_helmholtz(Q;k=3..3)","category":"page"},{"location":"docstrings/#Docstrings","page":"Docstrings","title":"Docstrings","text":"","category":"section"},{"location":"docstrings/","page":"Docstrings","title":"Docstrings","text":"Modules = [PolynomialSolutions]","category":"page"},{"location":"docstrings/#PolynomialSolutions.Polynomial","page":"Docstrings","title":"PolynomialSolutions.Polynomial","text":"struct Polynomial{N,T}\n\nA polynomial in N variables with coefficients of type T.\n\nThe functor interface is implemented, so that p(x) evaluates the polynomial. For performance reasons, x is expected to be a Tuple.\n\nExamples\n\nA polynomial with a single term can be created by passing a pair mapping the order to the coefficient:\n\njulia> Polynomial((1,1)=>2)\n2xy\n\nWhen multiple terms are present, they must be passed as vector (or tuple) of pairs:\n\njulia> Polynomial([(1,1)=>2, (0,1)=>-1])\n-y + 2xy\n\nThe spatial dimension is automatically inferred from the length of the order tuple:\n\njulia> Polynomial((1,1,1)=>2)\n2xyz\n\n\n\n\n\n","category":"type"},{"location":"docstrings/#PolynomialSolutions.convert_coefs-Union{Tuple{T}, Tuple{S}, Tuple{N}, Tuple{Polynomial{N, S}, Type{T}}} where {N, S, T}","page":"Docstrings","title":"PolynomialSolutions.convert_coefs","text":"convert_coefs(p::Polynomial, T)\n\nReturn a version of p where the coefficients have been converted to type T (is such a conversion is possible).\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#PolynomialSolutions.degree-Union{Tuple{Polynomial{N, T}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Docstrings","title":"PolynomialSolutions.degree","text":"degree(p::Polynomial)\n\nThe largest degree of any monomial in p.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#PolynomialSolutions.derivative-Union{Tuple{T}, Tuple{N}, Tuple{Polynomial{N, T}, Any}} where {N, T}","page":"Docstrings","title":"PolynomialSolutions.derivative","text":"derivative(p::Polynomial, i::Int)\n\nDifferentiate p with respect to the ith variable.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#PolynomialSolutions.drop_zeros!","page":"Docstrings","title":"PolynomialSolutions.drop_zeros!","text":"drop_zeros!(q::Polynomial,tol=0,p=2)\n\nDrop all coefficients in q for which the abs(p) ≤ tol.\n\n\n\n\n\n","category":"function"},{"location":"docstrings/#PolynomialSolutions.gradient-Union{Tuple{Polynomial{N, T}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Docstrings","title":"PolynomialSolutions.gradient","text":"gradient(p::Polynomial)\n\nReturn an N-tuple of the derivatives of p with respect to each variable.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#PolynomialSolutions.is_homogeneous-Union{Tuple{Polynomial{N, T}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Docstrings","title":"PolynomialSolutions.is_homogeneous","text":"is_homogeneous(p::Polynomial)\n\nReturn true if p is homogeneous, i.e. if all the monomials in p have the same degree.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#PolynomialSolutions.multiply_by_r-Union{Tuple{T}, Tuple{N}, Tuple{Polynomial{N, T}, Int64}} where {N, T}","page":"Docstrings","title":"PolynomialSolutions.multiply_by_r","text":"multiply_by_r(p::Polynomial, k::Int = 2)\n\nMultiply a polynomial p by the monomial r^k, where r = |𝐱| and k is an even positive integer.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#PolynomialSolutions.solve_bilaplace-Union{Tuple{Polynomial{N}}, Tuple{N}} where N","page":"Docstrings","title":"PolynomialSolutions.solve_bilaplace","text":"solve_bilaplace(Q::Polynomial)\n\nCompute a polynomial solution to Δ²P = Q. Q is required to be homogeneous.\n\nExamples\n\njulia> Q = Polynomial((1,0)=>1)\nx\n\njulia> P = solve_bilaplace(Q)\n1//192x⁵ + 1//96x³y² + 1//192xy⁴\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#PolynomialSolutions.solve_elastodynamics-Union{Tuple{Tuple{Vararg{Polynomial{N, T}, N}}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Docstrings","title":"PolynomialSolutions.solve_elastodynamics","text":"solve_elastodynamics(Q::NTuple{N,Polynomial{N,T}};ρ=1,μ=1,ν=1/4,ω=1)\n\nCompute a vector of polynomials U satisfying -μ/(1-2ν) ∇(div U) - μ ΔU - μ k₂² U = Q.\n\nExamples\n\njulia> Q = (Polynomial((2,1)=>1),Polynomial((1,0)=>1))\n(x²y, x)\n\njulia> P = solve_elastodynamics(Q;μ=1)\n(6//1y - x²y, 3//1x)\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#PolynomialSolutions.solve_elastostatic-Union{Tuple{Tuple{Vararg{Polynomial{N, T}, N}}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Docstrings","title":"PolynomialSolutions.solve_elastostatic","text":"solve_elastostatic(Q::NTuple{N,Polynomial{N,T}};μ=1,ν=1)\n\nCompute a vector of polynomials U satisfying μ/(1-2ν) ∇(div U) + μΔU = Q. Q is required to be homogeneous.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#PolynomialSolutions.solve_helmholtz-Tuple{Polynomial, Any}","page":"Docstrings","title":"PolynomialSolutions.solve_helmholtz","text":"solve_helmholtz(Q::Polynomial;k=1)\n\nReturn the unique polynomial P satisfying ΔP + k²P = Q.\n\nExamples\n\njulia> Q = Polynomial((1,2)=>1)\nxy²\n\njulia> P = solve_helmholtz(Q, k=1)\n-2.0x + xy²\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#PolynomialSolutions.solve_laplace-Union{Tuple{Polynomial{N, T}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Docstrings","title":"PolynomialSolutions.solve_laplace","text":"solve_laplace(Q::Polynomial)\n\nReturn a polynomial P satisfying ΔP = Q. Q is required to be homogeneous.\n\nExamples\n\njulia> Q = Polynomial((1,0)=>1.0)\nx\n\njulia> P = solve_laplace(Q)\n0.125xy² + 0.125x³\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#PolynomialSolutions.solve_maxwell-Union{Tuple{Tuple{Vararg{Polynomial{N, T}, N}}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Docstrings","title":"PolynomialSolutions.solve_maxwell","text":"solve_maxwell(J::NTuple{N,Polynomial{N,T}}, ρ::Polynomial{N, T};ϵ=1,μ=1,ω=1)\n\nCompute a pair of vectors of polynomials E and H satisfying the Maxwell system:\n\nbeginaligned\n  mathrmiomegavarepsilonboldsymbolE + operatornamerot boldsymbolH = boldsymbolJ qquad \n  -mathrmiomegamuboldsymbolH + operatornamerotboldsymbolE = boldsymbol0 \n  varepsilonoperatornamedivboldsymbolE = rho \n  muoperatornamedivboldsymbolH = 0\nendaligned\n\nReturns the pair (E, H).\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#PolynomialSolutions.solve_stokes-Union{Tuple{Tuple{Vararg{Polynomial{N, T}, N}}}, Tuple{T}, Tuple{N}} where {N, T}","page":"Docstrings","title":"PolynomialSolutions.solve_stokes","text":"solve_stokes(Q::NTuple{N,Polynomial{N,T}};μ=1)\n\nCompute a vector of polynomials U and a polynomial P satisfying μΔU - ∇P = Q with ∇ ⋅ U = 0. Q is required to be homogeneous.\n\nExamples\n\njulia> Q = (Polynomial((1,0)=>1),Polynomial((0,0)=>1))\n(x, 1)\n\njulia> P = solve_stokes(Q;μ=Rational(1))\n((-1//8xy + 1//16xy² + 1//48x³, 3//16x² + 1//16y² - 1//48y³ - 1//16x²y), -1//2y - 3//8x² - 1//8y²)\n\n\n\n\n\n","category":"method"}]
}