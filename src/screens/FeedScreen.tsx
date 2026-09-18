import {
  FlatList,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function FeedScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Scrollable Feed</Text>
            <Text style={styles.subtitle}>Your Latest Updates</Text>
            <FlatList<ItemData>
              data={TEST_DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.item}>
                  <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.content}</Text>
                </TouchableOpacity>
              )}
            />
        </View>
    )
}

type ItemData = {
  id: string;
  title: string;
  content: string;
};

const TEST_DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Restaurant Review',
    content: "Mr Lou's sucks for fish & chips. It was super chewey and to top it all off the ketchup was expired."
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fish Catch Record',
    content: 'Large Mouth Bass catch on a micro crankbait. 1.5 lbs',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Journal Entry',
    content: 'I hate my current job assignment but I love my team and how supportive they are',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  subtitle: {
    fontSize: 18,
  },
});