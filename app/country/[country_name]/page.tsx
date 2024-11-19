import Country  from "@/app/componants/country";

export default function CountryName({params}: {params:{country_name:string}}){

    const countries: { 
        name: string; 
        population: number; 
        capital: string 
        
    }[] = [

    { 
        name: "pakistan",
        population: 251269164,
        capital: "islamabad" 
    },
    { 
        name: "india",
        population: 1380004385,
        capital: "delhi" 
    },
    { 
        name: "china",
        population: 1418153587, 
        capital: "beijing" 
    },
    { 
        name: "brazil",
        population: 211998573,
        capital: "brasília" },
    { 
        name: "indonesia",
        population: 282477584,
        capital: "jakarta"
    },
      ];

function FindCountry (name: string): {name:string, population:number, capital:string} | undefined {
    return countries.find(
        (country) => name.toLocaleLowerCase() == country.name.toLocaleLowerCase()

    );
}
const result = FindCountry(params.country_name);

return(
    <div>
       <Country countryinfo = {result} url ={params.country_name}/>
    </div>
)

}