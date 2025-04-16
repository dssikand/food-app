import React from 'react';
import {FlatList} from 'react-native';

const ContentListing = ({
  numColumns,
  data,
  scrollEnabled,
  style,
  contentContainerStyle,
  renderItem,
  keyExtractor,
}) => {
  return (
    <FlatList
      numColumns={numColumns}
      data={data}
      scrollEnabled={scrollEnabled}
      keyExtractor={keyExtractor}
      style={style}
      renderItem={renderItem}
      contentContainerStyle={contentContainerStyle}
    />
  );
};

export default ContentListing;
