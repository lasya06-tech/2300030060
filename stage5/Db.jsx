function notify_all(student_id,type,message,timestamp){
    const notification={
        id:student_id,
        type:type,
        message:message,
        timestamp:timestamp
    };
    // Code to send the notification to all students
    console.log(`Notification sent to student ${student_id}: ${type} - ${message} at ${timestamp}`);
}

export default notify_all