# messy.quest

The static splash page for [www.messy.quest](https://www.messy.quest), home to KOBOLD FM, GHOULBOX, and BLOODWROUGHT. It is plain HTML, CSS, and a small vanilla JavaScript file with no build step or runtime dependencies.

## Preview locally

From the repository root, run:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## GitHub Pages and DNS

GitHub Pages should publish from the root of the `main` branch. The included `CNAME` sets the custom domain to `www.messy.quest`, and `.nojekyll` disables Jekyll processing.

Configure these DNS records:

- `www`: CNAME to `jasonpersinger.github.io`
- Apex (`messy.quest`) A records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Apex (`messy.quest`) AAAA records:
  - `2606:50c0:8000::153`
  - `2606:50c0:8001::153`
  - `2606:50c0:8002::153`
  - `2606:50c0:8003::153`

Leave the existing `kobold`, `ghoulbox`, and `bloodwrought` records untouched.

## Fonts and art

The type matches kobold.fm: [Jacquarda Bastarda 9](https://github.com/scfried/soft-type-jacquarda-bastarda) for display and [VT323](https://github.com/phoikoi/VT323) for body text. Both are self-hosted Latin subsets distributed under the SIL Open Font License 1.1; licenses are in `assets/fonts/`.

`assets/art/` holds copies of art from the sister sites: the brick wall, torch, skull, and logo from GHOULBOX, and the wordmark and hand sigil from bloodwrought. If those change upstream, re-copy them here.
