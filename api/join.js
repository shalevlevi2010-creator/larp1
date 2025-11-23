let tokens = {};

function generateToken() {
    return Math.random().toString(36).substr(2, 8);
}

export default function handler(req, res) {
    const token = generateToken();
    const expire = Date.now() + 2*60*1000; // 2 דקות
    tokens[token] = expire;

    res.writeHead(302, {
        Location: `https://chat.whatsapp.com/C9A2BVeVjFV99Zmq7a9Fbi?token=${token}`
    });
    res.end();
}
