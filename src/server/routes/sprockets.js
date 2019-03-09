function getSprockets(req, res) {
  const sprockets = [
    {
      name: 'cog',
    },
    {
      name: 'wheel',
    },
  ];

  res.send(sprockets);
}

module.exports = router => {
  router.get('/sprockets', getSprockets);
};
