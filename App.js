import * as React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {faker} from '@faker-js/faker'






// NAVIGATION COMPONENTS
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarStyle: {
        backgroundColor: '#A3BAC3',
        color: 'white',

      },
      headerShown: false
    }}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{ tabBarIcon: () => <Icon name='home' size={32} color='white' /> }} />
      <Tab.Screen name='Projects' component={ProjectsScreen} options={{ tabBarIcon: () => <Icon name='pencil' size={24} color='white' /> }} />
      <Tab.Screen name='Messages' component={MessagesScreen} options={{ tabBarIcon: () => <Icon name='envelope' size={24} color='white' /> }} />
      <Tab.Screen name='Payments' component={PaymentsScreen} options={{ tabBarIcon: () => <Icon name='credit-card-alt' size={20} color='white' /> }} />
      <Tab.Screen name='Bids' component={BidsScreen} options={{ tabBarIcon: () => <Icon name='money' size={25} color='white' /> }} />
    </Tab.Navigator>
  )
}


// SCREENS

const HomeScreen = () => (
  <ScrollView style={{ backgroundColor: "#f3f3f5" }}>
      <View style={{ margin: 10}}>
        <Icon name="cog" size={24} color="grey" style={{alignSelf: 'flex-end'}}/>
      </View>

    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{ height: 120, flexDirection: 'row', paddingRight: 10, paddingLeft: 10 }}>
        {data.Categories.map(woof => {
          return (
            <Card key={woof.id} style={CardStyles.card} avatar={woof.avatar} name={woof.name} />
          )
        })}
      </View>
    </ScrollView>
    <Heading>Popular Categories</Heading>
    {data.posts.map(post => {
      return (
        <Post
          key={post.id}
          image={post.image}
          title={post.title}
          description={post.description}
          caretaker={post.caretaker}
          source={post.source}
        />
      )
    })}
  </ScrollView>
);


const ProjectsScreen = () => {
  return (
    <View>
      <Text>Projects</Text>
    </View>
  )
}

const MessagesScreen = () => {
  return (
    <View>
      <Text>Messages</Text>
    </View>
  )
}

const PaymentsScreen = () => {
  return (
    <View>
      <Text>Payments</Text>
    </View>
  )
}

const BidsScreen = () => {
  return (
    <View>
      <Text>Bids</Text>
    </View>
  )
}



// Basic reusable components




const Avatar = (props) => (
  <Image
    style={styles.avatar}
    source={{ uri: props.url }}
  />
);

const Heading = (props) => (
  <Text style={styles.heading}>
    {props.children}
  </Text>
);

const Title = (props) => (
  <Text style={styles.title}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  avatar: { height: 60, width: 60, borderRadius: 50 },
  heading: { fontSize: 18, fontWeight: 'bold', padding: 20 },
  title: { fontSize: 13, fontWeight: 'bold', color: "indigo" },
});

// App-specific components

const Card = (props) => (
  <View style={CardStyles.card}>
    <Avatar url={props.avatar} />
    <Title style={CardStyles.title}>{props.name.toUpperCase()}</Title>
  </View>
);

const CardStyles = StyleSheet.create({
  card: {
    height: 110, width: 85, borderRadius: 12, borderWidth: 1,
    borderColor: '#e7e3eb', justifyContent: 'space-around',
    alignItems: 'center', padding: 5, 
    elevation: 3,
    marginLeft: 6, marginRight: 6, backgroundColor: 'white',

  },
  title: { marginVertical: 10 },
});

const Post = (props) => (
  <View style={PostStyles.layout}>
    <Image source={{ uri: props.image }} style={PostStyles.image} />
    <View style={PostStyles.content}>
      <Text style={PostStyles.title}>{props.title.toUpperCase()}</Text>
      <Text style={PostStyles.description} numberOfLines={2}>{props.description}</Text>
    </View>
  </View>
);

const PostStyles = StyleSheet.create({
  layout: { flexDirection: 'row', margin: 10, alignItems: "center" },
  image: { flex: 1, height: '100%', borderRadius: 10 },
  content: { flex: 1, justifyContent: "center" },
  title: { fontWeight: 'bold', padding: 6, color: "indigo" },
  description: { padding: 6, color: "indigo" },
});

let src = "https://images.unsplash.com/photo-1558947530-cbcf6e9aeeae?auto=format&fit=crop&w=634&q=80"
// The screen rendering everything

const App = () => (
  <NavigationContainer  >
    <TabNavigation />
  </NavigationContainer>
);

export default App;

// "Fake" API data to use in your app
const data = {
  Categories: [
    {
      name: 'Landscaping',
      avatar: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=648&q=80',
      id: 1,

    },
    {
      id: 2,
      name: 'Plumbing',
      avatar: 'https://images.unsplash.com/photo-1585584114963-503344a119b0?auto=format&fit=crop&h=64&q=80',
      
    },
    {
      id: 3,
      name: 'Tattoos',
      avatar: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&h=64&q=80',

    },
    {
      id: 'woof-4',
      name: 'Fluffy',
      avatar: 'https://images.unsplash.com/photo-1554956615-1ba6dc39921b?auto=format&fit=crop&h=64&q=80',
      caretaker: 'Nick Fewings',
      source: 'https://unsplash.com/photos/rMKXLAIa2OY',
    },
    {
      id: 'woof-5',
      name: 'Spirit',
      avatar: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?auto=format&fit=crop&h=64&q=80',
      caretaker: 'Jamie Street',
      source: 'https://unsplash.com/photos/uNNCs5kL70Q',
    },
  ],
  posts: [
    {
      id: 'post-1',
      image: faker.image.business(1234, 2345, true),
      title: 'Tattoos',
      description: 'Got an itch for some ink? Book an artist today.',
      caretaker: 'Jamie Street',
      source: 'https://unsplash.com/photos/UtrE5DcgEyg',
    },
    {
      id: 'post-2',
      image: faker.image.business(1234, 2345, true),
      title: 'Landscaping',
      description: 'Keep your lawn looking the best that it can.',
      caretaker: 'Krista Mangulsone',
      source: 'https://unsplash.com/photos/9gz3wfHr65U',
    },
    {
      id: 'post-3',
      image: faker.image.business(1234, 2345, true),
      title: 'Carpentry',
      description: 'Find the best carpentry specialists around.',
      caretaker: 'Olia Nayda',
      source: 'https://unsplash.com/photos/f6v_Q0WXEK8',
    },
    {
      id: 'post-4',
      image: faker.image.business(1234, 2345, true),
      title: 'Wild Woofs',
      description: 'In some parts of the world, wild woofs are very common. Learn how to interact in a nice way.',
      caretaker: 'Anoir Chafik',
      source: 'https://unsplash.com/photos/2_3c4dIFYFU',
    },
    {
      id: 'post-5',
      image: faker.image.business(1234, 2345, true),
      title: 'Sleepy Woofs',
      description: 'Sleeping is just as important for woofs as it is for humans. What are the main things your woof dreams about.',
      caretaker: 'Max Singh',
      source: 'https://unsplash.com/photos/2637Pic9xMw',
    },
    {
      id: 'post-6',
      image: faker.image.business(300, 600, true),
      title: 'Exploring Woofs',
      description: 'Just sitting in one place is boring for most woofs. How do woofs explore the world?',
      caretaker: 'Jamie Street',
      source: 'https://unsplash.com/photos/wcO2PWLuQ3U',
    },
  ],
};