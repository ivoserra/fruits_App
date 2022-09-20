import { gql } from '@apollo/client';


const GET_FRUITS = gql`
   query GetFruits {
     fruits {
       id
       fruit_name
       
     }
    }
`;

const UPDATE_FRUIT= gql`
mutation UpdateFruit(
  $id:String!,
  $scientific_name: String!,
  $tree_name: String!,
  $fruit_name: String!,
  $family: String,
  $origin: String,
  $description: String,
  $bloom: String,
  $maturation_fruit: String,
  $life_cycle: String,
  $climatic_zone: String,
  $producing_countries:[countries]
){
  updateFruit(
    id: $id,
    scientific_name: $scientific_name,
    tree_name: $tree_name,
    fruit_name: $fruit_name,
    family: $family,
    origin: $origin,
    description: $description,
    bloom: $bloom,
    maturation_fruit: $maturation_fruit,
    life_cycle: $life_cycle,
    climatic_zone: $climatic_zone,
    producing_countries: $producing_countries
    ){
    id
    scientific_name
    tree_name
    fruit_name
    family
    origin
    description
    bloom
    maturation_fruit
    life_cycle
    climatic_zone
    producing_countries
  }
}
`;


export { GET_FRUITS, UPDATE_FRUIT}