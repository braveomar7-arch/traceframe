# Traceframe 0.5 Practitioner Edition

**Every artifact. One timeline.**

Traceframe is an open-source, local-first digital evidence triage workbench. It helps investigators hash heterogeneous evidence, extract timestamped records and entity suggestions, normalize time to UTC, search a unified timeline, and export a reproducible case bundle.

Traceframe was developed by **Sheikh Omar Jallow**, Digital Forensic Expert,
MSc Digital Forensic, Applied Artificial Intelligence.

## Contact

Comments, queries, feedback and collaboration:

- Tel/WhatsApp: [833853607](https://wa.me/220833853607)
- Email: [Braveomar7@gmail.com](mailto:Braveomar7@gmail.com)

## What the MVP supports

- Multiple local files via picker or drag-and-drop
- JSON record discovery through nested structures
- CSV event extraction
- Timestamped lines from TXT, LOG, EML, XML, GPX and HTML files
- SHA-256 evidence manifest
- UTC-normalized unified timeline
- Email, phone, account and coordinate suggestions
- Case JSON, manifest JSON and timeline CSV exports
- Hash-only registration for any local file type
- File-signature recognition and duplicate-hash detection
- Chain-of-custody event ledger in exported manifests
- Guided product walkthrough and operator handbook
- Five-module evidence-handling course with knowledge checks
- AES-GCM encrypted local case vault
- Case authority, jurisdiction, examiner and scope record
- Manual chain-of-custody entries
- Global case queries and examiner findings
- Printable practitioner report
- Public capability and validation register
- Email and WhatsApp query workspace
- Live per-file forensic processing console
- Named read, hash, extract, index and verification stages
- Overall progress, elapsed time and estimated remaining time
- Rotating evidence-handling guidance during processing
- Safe cancellation after the current file
- Bounded-memory streaming SHA-256 for files 256 MB and larger
- Background hashing worker with true byte progress for forensic images
- Automatic hash-only handling for oversized binary evidence

## Method alignment

Traceframe uses lifecycle language informed by ISO/IEC 27037, NIST SP 800-86,
and published SWGDE collection guidance. It is not certified, endorsed, or a
substitute for laboratory validation, legal advice, or jurisdiction-specific
procedure.

All processing happens in the browser. Traceframe does not upload evidence, fetch remote resources, recover deleted data or determine authenticity.

## Run locally

Serve the `dist` directory with any static HTTP server:

```sh
python3 -m http.server 8080 --directory dist
```

Open `http://localhost:8080`.

## Publish with GitHub Pages

Upload the complete contents of this project to the root of your repository.
In GitHub, open **Settings → Pages**, select **Deploy from a branch**, choose
your main branch and the **/(root)** folder, then save. The root `index.html`
automatically opens the application from `dist/`.

Do not select the `docs/` folder, and do not upload only `README.md`.

## Architecture

The MVP intentionally has no build step or runtime dependencies. The UI is in `dist/index.html`, presentation in `dist/styles.css`, and the deterministic browser analysis engine in `dist/app.js`.

## Contributing

Good first contributions include format-specific adapters, test fixtures containing synthetic evidence, timestamp parsers and accessibility improvements. Never commit real case evidence or personal data.

## Security

Treat all evidence as sensitive. Run Traceframe offline for protected cases. Report vulnerabilities privately to the project maintainer before public disclosure.

## License

MIT License. See [LICENSE](LICENSE).
