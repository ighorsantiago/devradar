import React, { useState, useEffect } from 'react';
import { Callout } from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import { devs } from '../../utils/devs';

import {
      Container,
      Map,
      DevMarker,
      Avatar,
      CalloutView,
      DevName,
      DevBio,
      DevTechs,
      SearchForm,
      SearchInput,
      LaodButton,
      MarkerBtn,
} from './styles';

interface Dev {
      id: number,
      name: string,
      github_username: string,
      bio: string,
      avatar_url: string,
      techs: string[],
      latitude: number,
      longitude: number
}

export function Main({ navigation }) {

      const [filteredDevs, setFilteredDevs] = useState<Dev[]>([]);
      const [currentRegion, setCurrentRegion] = useState<[number, number]>([0, 0]);
      const [tech, setTech] = useState<string>('');

      const [isLoading, setIsLoading] = useState(false);

      // Carrega localização do usuário
      useEffect(() => {
            async function loadInitialPosition() {
                  const { granted } = await requestForegroundPermissionsAsync();

                  if (granted) {
                        const { coords } = await getCurrentPositionAsync();

                        const { latitude, longitude } = coords;

                        setCurrentRegion([
                              latitude,
                              longitude
                        ]);
                  }
            }

            loadInitialPosition();
      }, []);

      useEffect(() => {
            if (tech === '') {
                  setFilteredDevs([]);
                  console.log("Esvaziou:", filteredDevs);
            }

            loadDevs();

      }, [tech])

      async function loadDevs() {
            setIsLoading(true);
            setFilteredDevs([]);

            console.log(tech)

            devs.map(dev => {
                  // if (dev.techs.includes(tech.toLowerCase())) {
                  //       setFilteredDevs([...filteredDevs, dev]);
                  // }
                  dev.techs.includes(tech.toLowerCase())
                        && setFilteredDevs([...filteredDevs, dev])
                  console.log(dev.techs.includes(tech))
            });

            // setFilteredDevs(devs);
            console.log("Devs filtrados", filteredDevs);
      }

      function handleDevDetail(username: string) {
            console.log("Username antes da navegação:", username)
            navigation.navigate("Profile", {
                  githubUsername: username
            });
      }

      return (
            <Container>
                  {currentRegion[0] !== 0 && (
                        <Map
                              // style={{ width: '100%', height: '100%' }}
                              loadingEnabled={currentRegion[0] === 0}
                              initialRegion={{
                                    latitude: currentRegion[0],
                                    longitude: currentRegion[1],
                                    latitudeDelta: 0.014,
                                    longitudeDelta: 0.014
                              }}
                        >
                              {devs.map(dev => (
                                    dev.techs.includes(tech.toLowerCase()) ?
                                          <MarkerBtn onPress={() => handleDevDetail(dev.github_username)}>
                                                <DevMarker
                                                      key={String(dev.id)}
                                                      coordinate={{
                                                            latitude: dev.latitude,
                                                            longitude: dev.longitude
                                                      }}
                                                >
                                                      <Avatar
                                                            source={{ uri: `https://github.com/${dev.github_username}.png` }}
                                                      />
                                                </DevMarker>
                                          </MarkerBtn>
                                          : <></>
                              ))}
                        </Map>
                  )}
                  <SearchForm>
                        <SearchInput
                              placeholder="Buscar devs por techs..."
                              placeholderTextColor="#999"
                              autoCapitalize="words"
                              autoCorrect={false}
                              value={tech}
                              onChangeText={text => setTech(text)}
                        />

                        {/* <LaodButton onPress={loadDevs}>
                              <MaterialIcons name="my-location" size={20} color="#FFF" />
                        </LaodButton> */}
                  </SearchForm>
            </Container>
      )
}