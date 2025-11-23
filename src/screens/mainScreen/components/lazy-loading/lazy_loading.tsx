import { View, StyleSheet } from 'react-native';
import ShimmerPlaceholder from '../../../../components/shimmer-placeholder/ShimmerPlaceholder';

const LazyLoading = () => {
  return (
    <View style={styles.container}>
      <ShimmerPlaceholder width={255} height={38} style={styles.box} />
      <ShimmerPlaceholder width={329} height={231} style={styles.box} />
      <ShimmerPlaceholder width={127} height={38} style={styles.box} />
      <ShimmerPlaceholder width={117} height={20} style={styles.box} />
      <ShimmerPlaceholder width={80} height={20} style={styles.box} />
      <ShimmerPlaceholder width={157} height={20} style={styles.box} />
      <View style={styles.container2}>
        <View style={styles.boxGroup}>
          <ShimmerPlaceholder width={66} height={129} style={styles.box} />
          <ShimmerPlaceholder width={66} height={129} style={styles.box} />
          <ShimmerPlaceholder width={66} height={129} style={styles.box} />
          <ShimmerPlaceholder width={66} height={129} style={styles.box} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  box: {
    marginBottom: 20,
  },
  container2: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  boxGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
});

export default LazyLoading;
