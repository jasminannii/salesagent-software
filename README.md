# Griaßdi – KI-Sales-Agent (MVP)

Klickbarer erster MVP des Griaßdi Sales-Agents für Cold Caller.

**Live:** https://jasminannii.github.io/salesagent-software/

## Was die App kann

- **Heute:** Anrufliste mit Lead-Score und Anlass („Warum heute anrufen“)
- **Recherche:** Firma, Ansprechperson, News, LinkedIn-Kontext, beste Anrufzeit
- **Pitch:** Einstieg, Überleitung, Fragen, Nutzen, Einwände, Abschluss – Sie/Du
- **Dialer mit Live-Coaching:** simuliertes Gespräch, Coaching-Tipps, Checkliste, Redeanteil, Einwand-Hilfe
- **Nachbereitung:** Ergebnis, Pitch-Score, CRM-Zusammenfassung, Follow-up-Mail
- **Tracking, Leads (CSV-Import), Einrichtung** (Angebot, Zielgruppe, Datenquellen, Telefonie, Plan)
- **Testversion:** 3 Anrufe, danach Pro (79 €) / Premium (199 €)

## Hinweise

- Eine einzige Datei (`index.html`), ohne Server und ohne Abhängigkeiten.
- Auf GitHub Pages arbeitet die App mit Vorlagen. Die KI-Funktionen (Pitch, Einwand-Hilfe, Nachbereitung) laufen in der Claude-Artifact-Ansicht.
- Alle Firmen und Personen sind erfunden. Es wird niemand angerufen, CRM- und Datenanbindungen sind simuliert.
- Fortschritt (Anrufe, Ergebnisse) wird nur im eigenen Browser gespeichert. „Einrichtung → Demo zurücksetzen“ setzt alles zurück.

## Chrome-Erweiterung

Griaßdi läuft auch als Seitenleiste in Chrome (und Edge) – neben LinkedIn, dem CRM oder jeder anderen Website.

**Installieren (Testversion):**
1. `griassdi-extension.zip` herunterladen und entpacken.
2. In Chrome `chrome://extensions` öffnen und oben rechts den **Entwicklermodus** einschalten.
3. **Entpackte Erweiterung laden** und den entpackten Ordner wählen.
4. Griaßdi in der Symbolleiste anheften – ein Klick öffnet die Seitenleiste.

**Rechtsklick-Anruf:** Eine Telefonnummer auf einer Website markieren → Rechtsklick → *Mit Griaßdi anrufen*. Die Nummer landet oben in der Anrufliste.

**Neu bauen nach Änderungen an `index.html`:** `python3 build-extension.py`
