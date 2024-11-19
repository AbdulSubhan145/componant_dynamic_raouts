// Type for the countryinfo object


interface CountryInfo {
    name: string;
    population: number;
    capital: string;
  }
  
  // Type for the props passed to CountryDetails
  interface CountryDetailsProps {
    countryinfo?: CountryInfo;  // The countryinfo may or may not be provided
    url: string;                // The country name from the URL
  }

export default function CountryDetails(data: CountryDetailsProps) {
    return(
        <div>
            {data.countryinfo ?(
            <div className="text-center py-4 text-5xl">
                <h1>Country Name: {data.countryinfo.name}</h1>
                <h1>Country population: {data.countryinfo.population}</h1>
                <h1>Country capital: {data.countryinfo.capital}</h1>
            </div>
            ) : (
                <div className="text-center py-4 text-5xl">
                    <h1>{data.url} Not found</h1>
                </div>
            )}
        </div>
    );
}