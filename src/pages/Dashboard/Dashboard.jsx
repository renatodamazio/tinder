import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import TinderCard from "react-tinder-card";
import Chat from "../../components/Chatcontainer/Chat";
import { Card, Container, Content, CardContainer } from "./Dashboard.styles";

export const Dashboard = () => {
  const characters = [
    {
      name: "Richard Hendricks",
      url: "images/characters/1.jpg",
    },
    {
      name: "Erlich Bachman",
      url: "images/characters/2.jpg",
    },
    {
      name: "Monica Hall",
      url: "images/characters/3.jpg",
    },
    {
      name: "Jared Dunn",
      url: "images/characters/4.jpg",
    },
    {
      name: "Dinesh Chugtai",
      url: "images/characters/5.jpg",
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <>
      <Nav />
      <Container>
        <Content>
          <Chat />
          <CardContainer>
            {characters.map((character) => (
              <TinderCard
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name)}
                onCardLeftScreen={() => outOfFrame(character.name)}
              >
                <Card
                  style={{
                    backgroundImage:
                      "url(" + character.url + ")",
                  }}
                >
                  <h3>{character.name}</h3>
                </Card>
              </TinderCard>
            ))}
          </CardContainer>

          {lastDirection ? (
            <h2 className="infoText">You swiped {lastDirection}</h2>
          ) : (
            <h2 className="infoText" />
          )}
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
