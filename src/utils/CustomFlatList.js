import { faCircle, faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/action';

const CustomFlatlist = (props) => {

  const { favourites } = useSelector(state => state.userReducer);
  const [expanded, setExanded] = useState(false);
  const dispatch = useDispatch();

  const update = (item) => {
    if (favourites.includes(item)) {
      dispatch(removeItem(favourites.indexOf(item, 0)));
    }
    else {
      dispatch(addItem(item));
    }
  }

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#eeeeee' : '#ffff'
        }
      ]}
      onPress={() => setExanded(!expanded)}>
      <View style={styles.item}>
        <View style={styles.header}>
          <Image source={{ uri: `${props.item.builtBy[0].avatar}` }} style={{ height: 50, width: 50, borderRadius: 50, margin: 10 }} />
          <View>
            <Text style={styles.subtitle}>{props.item.username}</Text>
            <Text style={styles.title}>{props.item.repositoryName}</Text>
          </View>
          {
            !expanded &&
            <View style={styles.button}>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? '#F4E24B' : '#ffff'
                  }]}
                onPress={() => update(props.item)}
              >
                {
                  favourites.includes(props.item) ?
                    <FontAwesomeIcon icon={faStar} size={25} color={'#FFC300'} />
                    :
                    <FontAwesomeIcon icon={emptyStar} size={25} color={'#FFC300'} />
                }
              </Pressable>
            </View>
          }
        </View>
        {
          expanded &&
          <View style={styles.card}>
            <View style={styles.logo_text}>
              <Text style={styles.link} onPress={() => { Linking.openURL(props.item.url) }}>{props.item.url}</Text>
            </View>
            <View style={styles.body}>
              <View style={styles.logo_text}>
                <FontAwesomeIcon icon={faCircle} color={'red'} />
                {
                  props.item.language ?
                    <Text style={styles.text}>{props.item.language}</Text>
                    :
                    <Text style={styles.text}>NA</Text>
                }
              </View>
              <View style={styles.logo_text}>
                <FontAwesomeIcon icon={faStar} color={'#FFC300'} />
                <Text style={styles.text}>{props.item.totalStars}</Text>
              </View>
              <View style={styles.logo_text}>
                <FontAwesomeIcon icon={faCodeFork} />
                <Text style={styles.text}>{props.item.forks}</Text>
              </View>
            </View>
          </View>
        }
      </View>
    </Pressable >
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    marginLeft: 20,
  },
  title: {
    color: '#000000',
    fontSize: 18,
    margin: 5,
    marginLeft: 20,
  },
  subtitle: {
    color: '#444444',
    fontSize: 15,
    margin: 5,
    marginLeft: 20,
    width: 220
  },
  item: {
    borderWidth: 1,
    borderColor: '#bbbbbb'
  },
  logo_text: {
    margin: 5,
    fontSize: 18,
    flex: 1,
    flexDirection: 'row',
    marginRight: 18
  },
  text: {
    fontSize: 16,
    marginLeft: 3,
    color: '#000000'
  },
  button: {
    margin: 5,
    alignItems: 'stretch'
  },
  link: {
    fontSize: 16,
    marginLeft: 3,
    color: '#3388FF'
  }
});
export default CustomFlatlist;
