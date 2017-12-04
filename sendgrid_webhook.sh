function localtunnel {
lt -s heheteheloljk --port 3000
}

until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done