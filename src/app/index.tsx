import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DashboardCard } from '@/components/dashboard/dashboard-card';
import { ThemedView } from '@/components/themed-view';
import { dashboardInfo } from '@/constants/dashboard';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';


export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <Text style={styles.title}>
            Meu Dashboard
          </Text>
          <Text style={styles.subtitle}>
            Acompanhe sua evolução e conquiste seus objetivos de forma saudável e sustentável.
          </Text>
        </ThemedView>
        <ScrollView
          style={styles.cardsContainer}
          contentContainerStyle={styles.cardsContent}
        >
          {dashboardInfo.map((item, index) => (
            <DashboardCard
              key={index}
              title={item.title}
              value={item.value}
              description={item.description}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'flex-start',
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
    paddingBottom: 24,
  },
  cardsContainer: {
    flex: 1,
    width: '100%',
  },
  cardsContent: {
    gap: Spacing.three,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 14,
    color: '#A1A1AA',
    textAlign: 'left',
  },
});
