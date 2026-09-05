# Traceframe

**Every artifact. One timeline.**

Traceframe is an open-source, local-first digital evidence triage workbench. It helps investigators hash heterogeneous evidence, extract timestamped records and entity suggestions, normalize time to UTC, search a unified timeline, and export a reproducible case bundle.

Traceframe was built by a digital-forensics professional from The Gambia.

## Contact

Comments, feedback and collaboration are welcome on WhatsApp: [+220 700 0396](https://wa.me/2207000396).

## What the MVP supports

- Multiple local files via picker or drag-and-drop
- JSON record discovery through nested structures
- CSV event extraction
- Timestamped lines from TXT, LOG, EML, XML, GPX and HTML files
- SHA-256 evidence manifest
- UTC-normalized unified timeline
- Email, phone, account and coordinate suggestions
- Case JSON, manifest JSON and timeline CSV exports

All processing happens in the browser. Traceframe does not upload evidence, fetch remote resources, recover deleted data or determine authenticity.

## Run locally

Serve the `dist` directory with any static HTTP server:

```sh
python3 -m http.server 8080 --directory dist
```

Open `http://localhost:8080`.

## Architecture

The MVP intentionally has no build step or runtime dependencies. The UI is in `dist/index.html`, presentation in `dist/styles.css`, and the deterministic browser analysis engine in `dist/app.js`.

## Contributing

Good first contributions include format-specific adapters, test fixtures containing synthetic evidence, timestamp parsers and accessibility improvements. Never commit real case evidence or personal data.

## Security

Treat all evidence as sensitive. Run Traceframe offline for protected cases. Report vulnerabilities privately to the project maintainer before public disclosure.

## License

MIT License. See [LICENSE](LICENSE).
