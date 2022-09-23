import { gql } from '@apollo/client'

type Fruit{
    id: ID
    scientific_name: String
    tree_name: String
    fruit_name: String
    family: String
    origin: String
    description: String
    bloom: String
    maturation_fruit: String
    life_cycle: String
    climatic_zone: String
    producing_countries: [countries]
    }

    type Fruits{
        id: ID
        scientific_name: String
        tree_name: String
        fruit_name: String
        family: String
        origin: String
        description: String
        bloom: String
        maturation_fruit: String
        life_cycle: String
        climatic_zone: String
        producing_countries: [countries]
        }