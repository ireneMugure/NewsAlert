import { View, Text, ScrollView,Image, TouchableOpacity } from "react-native";
import { useState,useEffect} from "react";
import {Card} from 'react-native-paper';


export default function App() {

  const [data, setData]= useState([])
  console.log(data);
  const url = "https://newsapi.org/v2/everything?q=tesla&from=2022-08-29&sortBy=publishedAt&apiKey=ebef4141802142ed855d89692e656ab1"
  
  {/* fetching aticles from the news API */}
  const getArticles = () => {
    fetch (url)
    .then(res =>res.json())
    .then((json)=>setData(json))
    .catch((err)=>console.log(err))
  };
   useEffect (()=> {

    getArticles();

   }, []);
  
  return (
<>
    {
      object.keys(data).length> 0 &&(

      
    
    <ScrollView>
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
    {
      data.article.map((article,index)=>(
        <Card key = {index}>
          <View
          style={{
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            marginVertical:15

          }}
          
          
          >
            <Text style ={{ fontSize: 18, fontWeight: "bold", flex:1}}>{article.title}</Text>
            <TouchableOpacity>
            <Image
            source ={{uri:article.urlToImage}}
            style={{
              width:150,
              height:150,
              borderRadius:10
            }}
            
            />

            </TouchableOpacity>
            
          </View>
          <Text style={{fontSize:16}}>{article.description}</Text>
            <Text>{article.publishedAt}</Text>
        </Card>
      ))
    }
    </View>
    </ScrollView>
      )
    }

</>
);
}
