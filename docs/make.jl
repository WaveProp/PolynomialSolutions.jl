using PolynomialSolutions
using Documenter

DocMeta.setdocmeta!(PolynomialSolutions, :DocTestSetup, :(using PolynomialSolutions);
                    recursive=true)

makedocs(;
         modules=[PolynomialSolutions],
         authors="Luiz M. Faria",
         repo="https://github.com/WaveProp/PolynomialSolutions.jl/blob/{commit}{path}#{line}",
         sitename="PolynomialSolutions.jl",
         format=Documenter.HTML(;
                                prettyurls=get(ENV, "CI", "false") == "true",
                                canonical="https://WaveProp.github.io/PolynomialSolutions.jl",
                                edit_link="main",
                                assets=String[]),
         pages=["Home" => "index.md",
                "Docstrings" => "docstrings.md"])

deploydocs(;
           repo="github.com/WaveProp/PolynomialSolutions.jl",
           devbranch="main")
