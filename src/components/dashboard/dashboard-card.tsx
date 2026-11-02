import { StyleSheet, Text, View } from 'react-native'

interface DashboardCardProps {
  title: string
  value: string
  description?: string
}

export function DashboardCard({ title, value, description }: DashboardCardProps) {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text> 
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    gap: 8,
    backgroundColor: '#171A16',
    borderWidth: 1,
    borderColor: '#292D27',
    borderRadius: 16,
    padding: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    color: '#A1A1AA',
  },
  value: {
    textAlign: 'center',
    fontSize: 28, 
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  description: {
    textAlign: 'center',
    fontSize: 12,
    color: '#A1A1AA',
  },
});