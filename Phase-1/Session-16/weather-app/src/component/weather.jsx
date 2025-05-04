import React,{useReducer} from 'react'

const ActionTypes={
    SET_CITY:'SET_CITY',
    FETCH_WEATHER_SUCCESS:'FETCH_WEATHER_SUCCESS',
    FETCH_WEATHER_ERROR:'FETCH_WEATHER_ERROR',
}

//REDUCER FUNCTION
const weatherReducer=(state,action)=>{
    switch(action.type){
        case ActionTypes.SET_CITY:
            return{...state,city:action.payload};
        case ActionTypes.FETCH_WEATHER_SUCCESS:
            return{...state,weatherData:action.payload,error:null};
        case ActionTypes.FETCH_WEATHER_ERROR:
            return{...state,weatherData:null,error:action.payload};
        default:
            return state;
    }
};


const Weather =()=>{
    const[state,dispatch]=useReducer(weatherReducer,{
        city:'',
        weatherData:null,
        error:null,
    });

    const apiKey='19043c99a93215d99870aa62ecc42df4';
    const apiUrl='https://api.openweathermap.org/data/2.5/weather';

    const fetchWeatherData= async()=>{
        try {
            const response=await fetch(`${apiUrl}?q=${state.city}&appid=${apiKey}`);
            const data=await response.json();
            console.log(data);

            if(response.ok){
                dispatch({type:ActionTypes.FETCH_WEATHER_SUCCESS,payload:data});
            }else{
                dispatch({type:ActionTypes.FETCH_WEATHER_ERROR,payload:data.message});
            }
        } catch (error) {
            console.error('Fetch Error:',error);
            dispatch({type:ActionTypes.FETCH_WEATHER_ERROR,payload:'Something went wrong'});
        }
    }
    const handleCityChange=(e)=>{
        dispatch({type:ActionTypes.SET_CITY,payload:e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(state.city.trim()){
            fetchWeatherData();
        }else{
            dispatch({type:ActionTypes.FETCH_WEATHER_ERROR,payload:'Please enter a city name'});
        }
    };

    return(
        <div className='container text-center'>
            <h2 className='mb-4'>Weather Application</h2>
            <form onSubmit={handleSubmit} className='mb-4'>
                <div className='row justify-content-center'>
                    <input type='text' className='form-controel mb-2' 
                    placeholder='Enter City' 
                    value={state.city} onChange={handleCityChange}/>
                    <button type='submit' className='btn btn-primary mb-2'>Get Weather</button>
                </div>

            </form>
        </div>
    )
}

export default Weather;