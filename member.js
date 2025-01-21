function SkillsMember () {
  // Public methods
  return {
    // Get member skills
    getSkills: function (memberId) {
      return Skills.find({memberId: memberId});
    }
  }
}