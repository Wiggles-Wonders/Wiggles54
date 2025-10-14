import * as React from 'react';
import { ImageBackground, Image, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const BG = {
  Splash: require('./assets/backgrounds/splash.png'),
  Home: require('./assets/backgrounds/home.png'),
  Calm: require('./assets/backgrounds/calmtools.png'),
  Wiggles: require('./assets/backgrounds/wiggles.png'),
  Care: require('./assets/backgrounds/caregiver.png'),
  About: require('./assets/backgrounds/about.png')
};

const Logo = require('./assets/logo.png');
const Card = ({title, onPress, subtitle}) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    {subtitle ? <Text style={styles.cardSub}>{subtitle}</Text> : null}
  </TouchableOpacity>
);

function SplashScreen({ navigation }) {
  React.useEffect(() => {
    const t = setTimeout(() => navigation.replace('Home'), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <ImageBackground source={BG.Splash} style={styles.bg}>
      <View style={styles.center}>
        <Image source={Logo} style={{width:160, height:160, marginBottom: 12}} />
        <Text style={styles.title}>Wiggles & Wonders</Text>
        <Text style={styles.subtitle}>Helping Little Minds Feel Big Love</Text>
      </View>
    </ImageBackground>
  );
}

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={BG.Home} style={styles.bg}>
      <ScrollView contentContainerStyle={{padding: 24}}>
        <Text style={styles.h1}>Welcome to Wiggles' World</Text>
        <Text style={styles.p}>Step into a calm, colourful storybook. Tap a cloud to begin.</Text>
        <Card title="Calm Tools" subtitle="Breathing • Grounding • Play" onPress={() => navigation.navigate('CalmTools')} />
        <Card title="Wiggles World" subtitle="Meet your calm companion" onPress={() => navigation.navigate('WigglesWorld')} />
        <Card title="Caregiver Hub" subtitle="Resources • Tips • Articles" onPress={() => navigation.navigate('CaregiverHub')} />
        <Card title="About" subtitle="Made with love in Aotearoa" onPress={() => navigation.navigate('About')} />
      </ScrollView>
    </ImageBackground>
  );
}

function CalmToolsScreen() {
  return (
    <ImageBackground source={BG.Calm} style={styles.bg}>
      <View style={styles.overlay}>
        <Text style={styles.h1}>Calm Tools</Text>
        <Text style={styles.p}>Use these gentle tools to help little minds feel big love.</Text>
        <View style={styles.row}>
          <View style={styles.tool}><Text style={styles.toolText}>Bubble Breaths</Text></View>
          <View style={styles.tool}><Text style={styles.toolText}>5-4-3-2-1</Text></View>
        </View>
        <View style={styles.row}>
          <View style={styles.tool}><Text style={styles.toolText}>Finger Breathing</Text></View>
          <View style={styles.tool}><Text style={styles.toolText}>Calm Spot Ideas</Text></View>
        </View>
      </View>
    </ImageBackground>
  );
}

function WigglesWorldScreen() {
  return (
    <ImageBackground source={BG.Wiggles} style={styles.bg}>
      <View style={styles.overlay}>
        <Text style={styles.h1}>Meet Wiggles</Text>
        <Text style={styles.p}>Your colourful calm companion who loves forests, rainbows, and sensory play.</Text>
        <View style={styles.story}>
          <Text style={styles.storyText}>
            Welcome to Wiggles' World — where the wind is gentle, colours feel kind,
            and every breath is a tiny rainbow.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

function CaregiverHubScreen() {
  return (
    <ImageBackground source={BG.Care} style={styles.bg}>
      <View style={styles.overlay}>
        <Text style={styles.h1}>Caregiver Hub</Text>
        <View style={styles.cardStack}>
          <Text style={styles.li}>• Psychologist Tips (placeholders)</Text>
          <Text style={styles.li}>• Articles & Resources</Text>
          <Text style={styles.li}>• Sensory Support Basics</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

function AboutScreen() {
  return (
    <ImageBackground source={BG.About} style={styles.bg}>
      <View style={[styles.overlay, {backgroundColor:'rgba(0,0,0,0.25)', borderRadius:16}]}>
        <Text style={[styles.h1,{color:'#fff'}]}>About</Text>
        <Text style={[styles.p,{color:'#fff'}]}>Wiggles & Wonders Limited • Auckland, New Zealand</Text>
        <Text style={[styles.p,{color:'#fff'}]}>“Helping Little Minds Feel Big Love”</Text>
      </View>
    </ImageBackground>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CalmTools" component={CalmToolsScreen} />
        <Stack.Screen name="WigglesWorld" component={WigglesWorldScreen} />
        <Stack.Screen name="CaregiverHub" component={CaregiverHubScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, resizeMode: 'cover' },
  center: { flex:1, alignItems:'center', justifyContent:'center' },
  title: { fontSize: 28, fontWeight: '700', color: '#1e3a8a' },
  subtitle: { fontSize: 14, color: '#1f2937' },
  h1: { fontSize: 26, fontWeight: '700', marginBottom: 8, color: '#1f2a44' },
  p: { fontSize: 16, color: '#334155', marginBottom: 16 },
  card: { backgroundColor: 'rgba(255,255,255,0.85)', padding:16, borderRadius:16, marginBottom:12, borderWidth:1, borderColor:'rgba(0,0,0,0.05)' },
  cardTitle: { fontSize: 18, fontWeight: '700', color:'#0f172a' },
  cardSub: { fontSize: 13, color:'#475569', marginTop:4 },
  overlay: { flex:1, padding:24, justifyContent:'center' },
  row: { flexDirection:'row', gap:12, marginBottom:12 },
  tool: { flex:1, backgroundColor:'rgba(255,255,255,0.9)', padding:16, borderRadius:16, alignItems:'center' },
  toolText: { fontSize:16, fontWeight:'700', color:'#0f172a' },
  story: { backgroundColor:'rgba(255,255,255,0.85)', padding:16, borderRadius:16 },
  storyText: { fontSize:16, color:'#1f2937', lineHeight:22 },
  cardStack: { backgroundColor:'rgba(255,255,255,0.85)', padding:16, borderRadius:16 }
});