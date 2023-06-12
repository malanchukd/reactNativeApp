import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import ArticleItem from '../components/ArticleItem';
import ArticleDetailScreen from '../components/ArticleDetailsScreen';

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async (searchQuery) => {
    const apiKey = '7bf936f513e94628a01fab2b9996cabd';
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`);
      if (response.data && response.data.articles) {
        setArticles(response.data.articles);
        setLoading(false);
      } else {
        setError('Invalid response format');
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setLoading(true);
    fetchArticles(searchQuery);
  };

  const handleArticlePress = (article) => {
    setSelectedArticle(article);
  };

  const handleBackToHome = () => {
    setSelectedArticle(null);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (selectedArticle) {
    return (
      <ArticleDetailScreen article={selectedArticle} onBack={handleBackToHome} />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search articles..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleArticlePress(item)}>
            <ArticleItem article={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default HomeScreen;