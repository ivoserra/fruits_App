import { gql } from '@apollo/client';

const GET_FRUITS = gql`
   query GetFruits{
     fruits{
       id
       fruit_name
     }
    }
`;

const FRUIT = gql`
query Fruit($id: ID!){
  fruit(id : $id){
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
    producing_countries {country}
  }
}
`;

const ADD_FRUIT = gql`
  mutation addFruit(
    $id: ID!
    $scientific_name: String!
    $tree_name: String!
    $fruit_name: String!
    $family: String!
    $origin: String!
    $description: String!
    $bloom: String!
    $maturation_fruit: String!
    $life_cycle: String!
    $climatic_zone: String!
  ){
    addFruit(
      id: $id
      scientific_name: $scientific_name
      tree_name: $tree_name
      fruit_name: $fruit_name
      family: $family
      origin: $origin
      description: $description
      bloom: $bloom
      maturation_fruit: $maturation_fruit
      life_cycle: $life_cycle
      climatic_zone: $climatic_zone
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
    }
  }
`;

const UPDATE_FRUIT = gql`
  mutation updateFruit(
    $id: ID!
    $scientific_name: String!
    $tree_name: String!
    $fruit_name: String!
    $family: String!
    $origin: String!
    $description: String!
    $bloom: String!
    $maturation_fruit: String!
    $life_cycle: String!
    $climatic_zone: String!
  ){
    updateFruit(
      id: $id
      scientific_name: $scientific_name
      tree_name: $tree_name
      fruit_name: $fruit_name
      family: $family
      origin: $origin
      description: $description
      bloom: $bloom
      maturation_fruit: $maturation_fruit
      life_cycle: $life_cycle
      climatic_zone: $climatic_zone
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
    }
  }
`;

const FILTER_FRUIT_FAMILY = gql`
query filterFruitsFam($family:String!){
	filterFruitsFam(family:$family ){
    id
		fruit_name
	}
}
`

const FILTER_FRUIT_ORIGIN = gql`
query filterFruitsOri($origin: String!){
  filterFruitsOri(origin:$origin){
    id
    fruit_name
  }
}`



export { GET_FRUITS, FRUIT, ADD_FRUIT, UPDATE_FRUIT, FILTER_FRUIT_FAMILY , FILTER_FRUIT_ORIGIN}