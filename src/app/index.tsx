import { ScrollView, StyleSheet, Text, View } from 'react-native';
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
        <ThemedView style={styles.activitySection}>
          <View>
            <Text style={styles.sectionTitle}>Atividade semanal</Text>
            <Text style={styles.sectionSubtitle}>
              Seus treinos nos últimos 7 dias
            </Text>
          </View>
        </ThemedView>
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
  activitySection: {
    width: '100%',
    gap: Spacing.three,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#A1A1AA',
  },
});
