import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;
`;

export const Map = styled(MapView)`
      flex: 1;
`;

export const MarkerBtn = styled(RectButton)``;

export const DevMarker = styled(Marker)`
      width: 90px;
      height: 80px;
`;

export const Avatar = styled.Image`
      width: 54px;
      height: 54px;
      border-radius: 4px;
      border-width: 4px;
      border-color: white;
`;

export const CalloutView = styled.View`
      width: 70px;

      background-color: red;
`;

export const DevName = styled.Text`
      font-weight: bold;
      font-size: 16px;
`;

export const DevBio = styled.Text`
      color: #666;
      margin-top: 5px;
`;

export const DevTechs = styled.Text`
      margin-top: 5px;
`;

export const SearchForm = styled.View`
      position: absolute;
      top: 20px;
      left: 20px;
      right: 20px;
      z-index: 5;
      flex-direction: row;
`;

export const SearchInput = styled.TextInput`
      flex: 1;
      height: 50px;
      background-color: #FFF;
      color: #333;
      border-radius: 25px;
      padding-horizontal: 20px;
      font-size: 16px;
      shadow-color: #000;
      shadow-opacity: 0.2;
      elevation: 2;
      margin-top: 50px;
`;

export const LaodButton = styled(TouchableOpacity)`
      width: 50px;
      height: 50px;
      background-color: #8E4Dff;
      border-radius: 25px;
      justify-content: center;
      align-items: center;
      margin-left: 15px;
      margin-top: 50px;
`;
