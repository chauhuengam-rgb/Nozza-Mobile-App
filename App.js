import React, { useState } from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [text, setText] = useState(''); // Chỗ này để giữ nội dung bà nhập

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          
          <View style={styles.container}>
             <Text style={styles.title}>Willkommen bei Nozza! ✅</Text>
             
             <Text style={styles.subTitle}>Bài tập (Aufgabe):</Text>
             
             <TextInput 
                style={styles.input}
                placeholder="Nhập tên bài tập..."
                value={text}
                onChangeText={setText}
             />

             <TouchableOpacity 
                style={styles.button}
                onPress={() => Alert.alert("Erfolg", `Đã lưu: ${text}`)}
             >
                <Text style={styles.buttonText}>Speichern (Lưu lại)</Text>
             </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2c3e50',
  },
  subTitle: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontSize: 16,
    color: '#34495e',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});