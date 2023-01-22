import { useState } from "react";
import './App.css';
import { Pets } from "./ui-components";
import { NavBar } from './ui-components';
import { AddPet } from './ui-components';
import { PetDetails } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({ user, signOut}) {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();

  const [updatePet, setUpdatePet] = useState();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const formOverride = {
    TextField29766922: {
      placeholder: name,
    },
    TextField29766923: {
      placeholder: age,
    },
    TextField29766924: {
      placeholder: breed,
    },
    TextField36602692: {
      placeholder: about,
    },
    TextField36602699: {
      placeholder: color,
    },
    TextField36602706: {
      placeholder: image,
    },

    Button36602715: {
      isDisabled: !updatePet ? true : false,
    },
    Button29766926: {
      isDisabled: updatePet ? true : false,
    },

    image: {
      src: 
        updatePet == null 
          ? "https://images.unsplash.com/photo-1624588887078-f9d8ebf2dcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHJhZ29uLWZseXx8fHx8fDE2NTI3MzMyMDg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          : updatePet.image,
    },

    Icon: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(false);
      },
    },
  };

  const navbarOverrides = {
    Button: {
      onClick: signOut,
    },
    image: {
      src: user?.attributes?.profile
    },
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
       setShowForm(!showForm);
      },
    },
  };

  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navbarOverrides} />
      <header className="App-header">
        {showDetails && (
          <PetDetails
            pet={pet}
           style={{
              textAlign: "left",
              margin: "1rem",
            }}
            overrides={{
              Close: {
                onClick: () => {
                  setShowDetails(false)
                },
                style: {
                  cursor: "pointer",
                },
              },
            }}
          />
        )}
        {showForm && (
          <AddPet 
            pet={updatePet}
            overrides={formOverride}
            style={{
              textAlign: "left",
              margin: "1rem",
            }}
          />
        )}
        <Pets 
          overrideItems={({item, index}) => ({
            overrides: {
              Button29766907: {
                onClick: () => {
                  setShowDetails(!showDetails);
                  setPet(item);
                },
              },
              Button36532696: {
                onClick: () => {
                  if (!showForm) setShowForm(true);
                  setUpdatePet(item);
                  setName(item.name);
                  setColor(item.color);
                  setAge(item.age);
                  setBreed(item.breed);
                  setAbout(item.about);
                  setImage(item.image);
                },
              },
            },
          })}
        />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
