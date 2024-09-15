async (memberID, memberPrayerMessage) => {
  try {
    const prayerTimestamp = Timestamp.fromDate(new Date());
    copyPrayerMessage(memberPrayerMessage);
    await db.collection("members").doc(memberID);
  } catch (d) {}
};
// checking
