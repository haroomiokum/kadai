const profile = {
    firstName: 'Mio',
    familyName: 'Kawasaki',
    age: 20,
    major: 'East Asia',
    hobby: 'Sleeping',
    job: 'Student',
}

// console.log(profile.firstName) // 'Mio'
console.log(profile["first-name"]) // 'Mio'
const keys = object.keys(profile);

for (let i = 0; i < keys.length; i = i + 1) {
    const key = keys[i];
    console.log(profile[key]);
    const value = profile[key];
    const text = "私の" + key + "は、"　+ value + "です。"
    console.log(text);
}

for (let key of keys) {
    const value = profile[key];
    const text = "私の" + key + "は、" + value + "です。";
    console.log(text);
}