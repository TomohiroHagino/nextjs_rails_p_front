module.exports = ({
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    FRONT_URL: process.env.NEXT_PUBLIC_FRONT_URL,
  },
});
