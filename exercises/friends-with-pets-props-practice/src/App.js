import React from "react";
import FriendList from "./FriendList.js";

const App = () => {
  const friends = [
    {
      name: "Ben",
      age: 29,
      pets: [
        {
          name: "spot",
          breed: "tabby"
        },
        {
          name: "John Johnson",
          breed: "husky"
        },
        {
          name: "Bear the bear",
          breed: "Grizzly"
        }
      ]
    },
    {
      name: "Bob",
      age: 31,
      pets: [
        {
          name: "Sally",
          breed: "Australian Shepard"
        }
      ]
    },
    {
      name: "Marcus",
      age: 25,
      pets: [
        {
          name: "Indy",
          breed: "Akita"
        },
        {
          name: "Anna",
          breed: "persian cat"
        }
      ]
    },
    {
      name: "Jacob",
      age: 20,
      pets: [
        {
          name: "fluffy",
          breed: "sphynx cat"
        },
        {
          name: "patches",
          breed: "sphynx cat"
        },
        {
          name: "tiger",
          breed: "sphynx cat"
        },
        {
          name: "oscar",
          breed: "sphynx cat"
        }
      ]
    }
  ];

//   const mappedFriendList = friends.map((person, i) => (
//     <FriendList friends={friends} name={friends.name} key={i} />
//   ));
  return (
    <div>
      <FriendList friends={friends}/>
    </div>
  );
};

export default App;
