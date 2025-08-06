# Vimal Menon

This is Website for Vimal Menon

### Details

<b>Name</b>: Vimal Menon
<br/>
<b>Version</b>: 0.0.37
<br/>
<b>Website</b>: [vimalmenon.com](https://vimalmenon.com)
<br/>

## To Do

- [x] Make the group Link name consistent(Use the name LinkGroup and not GroupLink)
- [ ] Improve Home page
- [ ] Improve About page
- [ ] Improve UI for Workflow Page
- [ ] Get release automatically
- [ ] Add blog for Command
- [ ] Show error in UI
- [ ] Show All past links in Admin Page
- [ ] Move all the reducer to useState (Hard to manage useReducer)
- [ ] Create validate nodes
- [ ] Close confirm dialogue when error
- [ ] Fix clear on multiselect
- [ ] Store value in Cookie
- [ ] Create cookie accepter
- [ ] Improve Our Team
- [ ] Get Tag Number automatically
- [ ] Improve the theme choosing UI
- [ ] Improve UI for Mobile Header Navigation
- [ ] Add framer motion
- [ ] Create sub navigation for Blogs
- [ ] Create favicon for Website
- [ ] Grouping import
- [ ] Create API for production
- [ ] Create Contact US Page
- [ ] Add Sitemap.xml

## Ideas

- Show Team Members

## Command

Clean up Remote branch

```sh
git remote update origin --prune
```

Eslint copilot

```sh
copilot-debug npm run eslint:fix
```

Start K3S in windows

```sh
wsl -d myk3s
openrc default
kubectl get nodes\
----
wsl -d myk3s openrc default
```

Remove old branch

```sh
git branch | grep -v "$(git branch --show-current)" | xargs git branch -D
```

## Links

- [ReactFlow](https://reactflow.dev/components/templates/workflow-editor)
- [K3S Windows](https://mrtn.me/autocloud/main/howtos/k3s-windows-install/)
- [Sonar](https://sonarcloud.io/project/overview?id=vimalmenon_vimalmenon.github.io)
