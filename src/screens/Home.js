
import { useNetInfo } from "@react-native-community/netinfo";
import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, RefreshControl, Text } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import { getrepos, resetRepos, setLoader, } from "../redux/action";
import CustomFlatlist from "../utils/CustomFlatList";
import Error from "../utils/Error";
import Loader from "../utils/Loader";

export default function Home({ navigation }) {

  const { repos, isLoader } = useSelector(state => state.userReducer);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const netInfo = useNetInfo();


  useEffect(() => {
    if(netInfo.isConnected)
    {
        dispatch(getrepos());
    }
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    if (netInfo.isConnected) {
      dispatch(resetRepos());
      dispatch(getrepos());
    }
    setRefreshing(false);
  }

  return (
    <View>
      {
        isLoader ?
          repos.length > 0 ? <FlatList style={styles.body}
            data={repos}
            renderItem={({ item }) =>
              <CustomFlatlist item={item} />
            }
            keyExtractor={(item, index) => index.toString()}
            refreshControl={
              < RefreshControl
                enabled={true}
                refreshing={refreshing}
                onRefresh={() => onRefresh()}
              />
            }
          />
            : <Error />
          : <Loader />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffff'
  }
})
