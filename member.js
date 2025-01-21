function SkillsMember () {
  const member = {
    name: 'John Doe',
    age: 30
  };

  return {
    getMember: function () {
      return member;
    }
  };
}