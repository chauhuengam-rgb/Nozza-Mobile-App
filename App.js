import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handlePress = (appName) => {
    Alert.alert("App Launcher", `Opening ${appName}...`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>9:41</Text>
        <Text style={styles.statusText}>5G 🔋</Text>
      </View>

      
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search apps, notes, or web..."
          placeholderTextColor="#71717a"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.widgetCard}>
          <Text style={styles.timeText}>09:41</Text>
          <Text style={styles.dateText}>Tuesday, October 13</Text>
          <Text style={styles.weatherText}>☁️ 24°C • Ho Chi Minh City</Text>
        </View>

        <Text style={styles.sectionTitle}>Workspace & Study</Text>

        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.appIcon} onPress={() => handlePress('Nozza Study')}>
            <Text style={styles.iconEmoji}>🇩🇪</Text>
            <Text style={styles.appLabel}>Nozza</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appIcon} onPress={() => handlePress('Notes')}>
            <Text style={styles.iconEmoji}>📝</Text>
            <Text style={styles.appLabel}>Notes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appIcon} onPress={() => handlePress('Tasks')}>
            <Text style={styles.iconEmoji}>📊</Text>
            <Text style={styles.appLabel}>Tasks</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appIcon} onPress={() => handlePress('GitHub')}>
            <Text style={styles.iconEmoji}>🐙</Text>
            <Text style={styles.appLabel}>GitHub</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>System & Utilities</Text>

        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.appIcon} onPress={() => handlePress('Settings')}>
            <Text style={styles.iconEmoji}>⚙️</Text>
            <Text style={styles.appLabel}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appIcon} onPress={() => handlePress('Music')}>
            <Text style={styles.iconEmoji}>🎵</Text>
            <Text style={styles.appLabel}>Music</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appIcon} onPress={() => handlePress('Photos')}>
            <Text style={styles.iconEmoji}>🖼️</Text>
            <Text style={styles.appLabel}>Photos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appIcon} onPress={() => handlePress('Browser')}>
            <Text style={styles.iconEmoji}>🌐</Text>
            <Text style={styles.appLabel}>Browser</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090b',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  statusText: {
    color: '#a1a1aa',
    fontSize: 12,
    fontWeight: '600',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#27272a',
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingVertical: 12,
    color: '#ffffff',
    fontSize: 14,
  },
  widgetCard: {
    backgroundColor: '#18181b',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#27272a',
  },
  timeText: {
    fontSize: 54,
    fontWeight: '200',
    color: '#ffffff',
    letterSpacing: 1,
  },
  dateText: {
    fontSize: 15,
    color: '#d4d4d8',
    marginTop: 4,
    fontWeight: '500',
  },
  weatherText: {
    fontSize: 13,
    color: '#71717a',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#a1a1aa',
    marginBottom: 15,
    marginLeft: 5,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  appIcon: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: '#18181b',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#27272a',
  },
  iconEmoji: {
    fontSize: 26,
  },
  appLabel: {
    color: '#d4d4d8',
    fontSize: 11,
    marginTop: 6,
    fontWeight: '500',
  },
});
