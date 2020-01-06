module.exports = async (client, error) => {
    console.error(error);
    hook.send(error);
}