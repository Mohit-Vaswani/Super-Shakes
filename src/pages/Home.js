import supabase from "../config/supabaseClient"
import { useState, useEffect } from "react";

// Components
import SmoothieCard from "../Components/smoothieCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  useEffect(()=>{
    const fetchSmoothies = async () =>{
      const {data, error} = await supabase.from('smoothis').select()

      if(error){
        setFetchError('Could Not Fetch the Smoothies')
        setSmoothies(null)
        console.log(error)
      }
      if(data){
        setSmoothies(data)
        setFetchError(null)
      }
    }

    fetchSmoothies()
  }, [])

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && (
        <div className="smoothies">
          {/* Order by buttons */}
          <div className="smoothie-grid">
          {smoothies?.map(smoothie => (
            <SmoothieCard key={smoothie.id} smoothie={smoothie} />
          ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home