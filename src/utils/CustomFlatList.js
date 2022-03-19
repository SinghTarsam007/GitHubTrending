import { faCircle, faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

const CustomFlatlist = (props) => {

  const [expanded, setExanded] = useState(false);
  const [url, setUrl] = useState('')

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
        </View>
        {
          expanded &&
          <View style={styles.card}>
            <View style={styles.logo_text}>
              <Text style={styles.text}>{props.item.url}</Text>
            </View>
            <View style={styles.body}>
              <View style={styles.logo_text}>
                <FontAwesomeIcon icon={faCircle} color={'red'} />
                <Text style={styles.text}>{props.item.language}</Text>
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
    </Pressable>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row'
  },
  header: {
    flex: 1,
    flexDirection: 'row'
  },
  card: {
    marginLeft: 90,
  },
  title: {
    color: '#000000',
    fontSize: 20,
    margin: 5,
    marginLeft: 20,
  },
  subtitle: {
    color: '#444444',
    fontSize: 15,
    margin: 5,
    marginLeft: 20,
  },
  item: {
    borderWidth: 1,
    borderColor: '#bbbbbb'
  },
  logo_text: {
    margin: 5,
    fontSize: 18,
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    fontSize: 18,
    marginLeft: 3,
  }

});
export default CustomFlatlist;
