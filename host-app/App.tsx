import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Booking = {
  id: string;
  guest: string;
  time: string;
  guests: number;
  amount: number;
};

type Listing = {
  id: string;
  name: string;
  category: string;
  duration: string;
  pricePerPerson: number;
  status: 'Live' | 'Pending Approval';
};

const todayBookings: Booking[] = [
  { id: 'BKG-1042', guest: 'Aarav P.', time: '12:30 PM', guests: 4, amount: 3600 },
  { id: 'BKG-1043', guest: 'Emma S.', time: '3:00 PM', guests: 2, amount: 1800 },
];

const upcomingBookings: Booking[] = [
  { id: 'BKG-1048', guest: 'Kabir M.', time: 'Tomorrow, 11:00 AM', guests: 3, amount: 2700 },
  { id: 'BKG-1049', guest: 'Liam T.', time: 'Sat, 5:00 PM', guests: 6, amount: 5400 },
];

const hostListings: Listing[] = [
  {
    id: 'LST-201',
    name: 'Goan Home Cooking Workshop',
    category: 'Food',
    duration: '2 hours',
    pricePerPerson: 900,
    status: 'Live',
  },
  {
    id: 'LST-202',
    name: 'Monsoon Pottery Session',
    category: 'Art',
    duration: '1.5 hours',
    pricePerPerson: 1200,
    status: 'Pending Approval',
  },
];

const earnings = {
  gross: 52300,
  commission: 4184,
  net: 48116,
  nextPayout: 'Monday, 20 May',
};

export default function App() {
  const [isAvailableToday, setIsAvailableToday] = useState(true);

  const todayEarnings = todayBookings.reduce(
    (total, booking) => total + booking.amount,
    0,
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <View style={styles.headerCard}>
          <Text style={styles.h1}>RainPlan Host</Text>
          <Text style={styles.subtleText}>Panjim, Goa</Text>
          <View style={styles.rainBanner}>
            <Text style={styles.rainTitle}>Rain Alert: Heavy Rain</Text>
            <Text style={styles.rainText}>
              Tourists are actively searching for indoor experiences near you.
            </Text>
          </View>
          <Pressable
            onPress={() => setIsAvailableToday((current) => !current)}
            style={[
              styles.availabilityToggle,
              isAvailableToday ? styles.available : styles.unavailable,
            ]}
          >
            <Text style={styles.toggleLabel}>
              {isAvailableToday ? 'Available for Today' : 'Unavailable for Today'}
            </Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.h2}>Today&apos;s Bookings</Text>
          {todayBookings.map((booking) => (
            <View key={booking.id} style={styles.row}>
              <View>
                <Text style={styles.rowTitle}>{booking.time}</Text>
                <Text style={styles.subtleText}>
                  {booking.guest} • {booking.guests} guests • {booking.id}
                </Text>
              </View>
              <Text style={styles.amount}>₹{booking.amount}</Text>
            </View>
          ))}
          <Text style={styles.summaryText}>Today&apos;s total: ₹{todayEarnings}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.h2}>Upcoming (Next 7 Days)</Text>
          {upcomingBookings.map((booking) => (
            <View key={booking.id} style={styles.row}>
              <View>
                <Text style={styles.rowTitle}>{booking.time}</Text>
                <Text style={styles.subtleText}>
                  {booking.guest} • {booking.guests} guests
                </Text>
              </View>
              <View style={styles.actionRow}>
                <Pressable style={styles.acceptButton}>
                  <Text style={styles.buttonText}>Accept</Text>
                </Pressable>
                <Pressable style={styles.declineButton}>
                  <Text style={styles.buttonText}>Decline</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.h2}>Your Listings</Text>
          {hostListings.map((listing) => (
            <View key={listing.id} style={styles.listingItem}>
              <View>
                <Text style={styles.rowTitle}>{listing.name}</Text>
                <Text style={styles.subtleText}>
                  {listing.category} • {listing.duration} • ₹{listing.pricePerPerson}/person
                </Text>
              </View>
              <Text
                style={[
                  styles.badge,
                  listing.status === 'Live' ? styles.liveBadge : styles.pendingBadge,
                ]}
              >
                {listing.status}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.h2}>Earnings</Text>
          <Text style={styles.summaryText}>Gross: ₹{earnings.gross}</Text>
          <Text style={styles.summaryText}>Commission (8%): ₹{earnings.commission}</Text>
          <Text style={styles.summaryText}>Net Payout: ₹{earnings.net}</Text>
          <Text style={styles.subtleText}>Next payout: {earnings.nextPayout}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.h2}>Reviews & Rating</Text>
          <Text style={styles.rating}>⭐ 4.8 SuperHost</Text>
          <Text style={styles.subtleText}>“Warm host and perfect rainy-day activity.” — Sofia</Text>
          <Text style={styles.subtleText}>“Would book again. Great value.” — Rahul</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  screen: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 12,
  },
  headerCard: {
    backgroundColor: '#1A56A0',
    borderRadius: 12,
    padding: 16,
    gap: 10,
  },
  h1: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  h2: {
    color: '#0F1E2F',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtleText: {
    color: '#6B7E8F',
    fontSize: 14,
    lineHeight: 22,
  },
  rainBanner: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    gap: 4,
  },
  rainTitle: {
    color: '#1A56A0',
    fontSize: 16,
    fontWeight: '600',
  },
  rainText: {
    color: '#3B5168',
    fontSize: 14,
    lineHeight: 20,
  },
  availabilityToggle: {
    borderRadius: 12,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  available: {
    backgroundColor: '#27AE60',
  },
  unavailable: {
    backgroundColor: '#E74C3C',
  },
  toggleLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    gap: 12,
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  row: {
    gap: 8,
  },
  rowTitle: {
    color: '#0F1E2F',
    fontSize: 16,
    fontWeight: '600',
  },
  amount: {
    color: '#1A56A0',
    fontSize: 16,
    fontWeight: '700',
  },
  summaryText: {
    color: '#0F1E2F',
    fontSize: 14,
    lineHeight: 22,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 8,
  },
  acceptButton: {
    backgroundColor: '#27AE60',
    borderRadius: 8,
    minHeight: 40,
    minWidth: 84,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  declineButton: {
    backgroundColor: '#E74C3C',
    borderRadius: 8,
    minHeight: 40,
    minWidth: 84,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  listingItem: {
    gap: 8,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 12,
    fontWeight: '600',
  },
  liveBadge: {
    backgroundColor: '#DFF4E8',
    color: '#27AE60',
  },
  pendingBadge: {
    backgroundColor: '#FFEFD7',
    color: '#F5A623',
  },
  rating: {
    color: '#F5A623',
    fontSize: 16,
    fontWeight: '700',
  },
});
