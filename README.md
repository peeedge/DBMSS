# DBMSS event page

Static one-page site. Edit `content.js`, then publish.

## Edit the page

1. Open `content.js`.
2. Change the name, date, place, RSVP link, schedule, and FAQ.
3. Save. Refresh the browser to preview.

Do not put secrets in this folder. Anything here can go live on the public web.

## Preview locally

Open `index.html` in a browser, or from this folder:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Put it on the web (GitHub Pages)

This folder is already connected to `https://github.com/peeedge/DBMSS`.

1. Commit and push these files to `main`.
2. On GitHub: **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main`, folder: `/ (root)`.
5. Save. After a minute the site is at:

`https://peeedge.github.io/DBMSS/`

If the site is in a project repo (not `peeedge.github.io`), GitHub Pages works the same. Custom domains are cleaner for guests.

## Custom domain

1. Buy a domain (Cloudflare Registrar, Namecheap, Google/Squarespace Domains, or your existing registrar).
2. Add a file named `CNAME` in this folder with one line: the domain only, no `https://`. Example: `dbmss.party`.
3. Push that change.
4. In GitHub: **Settings → Pages → Custom domain**, enter the same name, save, and wait for DNS check.
5. At your domain registrar, set DNS:

**Apex domain** (`dbmss.party` with no `www`):

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**www** (optional, recommended):

| Type | Name | Value |
| --- | --- | --- |
| CNAME | `www` | `peeedge.github.io` |

6. Turn on **Enforce HTTPS** in GitHub Pages once the certificate is ready (can take up to an hour).

If GitHub’s DNS check fails, wait for DNS to propagate (often 5–30 minutes, sometimes longer) and click **Retry**.

## After the first publish

Change `content.js` (or the styles), commit, push. GitHub Pages rebuilds. Guests see the new copy on the same URL.
