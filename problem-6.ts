{
  //

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (
    profile: Profile,
    updateObj: Partial<Profile>
  ): Profile => {
    return {
      ...profile,
      ...updateObj,
    };
  };

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  // const updatedProfile = updateProfile(myProfile, { age: 26 });
  // console.log(updatedProfile);

  //
}
