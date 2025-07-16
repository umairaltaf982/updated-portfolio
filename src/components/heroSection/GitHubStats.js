import React, { useEffect, useState } from 'react';

const GitHubStats = () => {
  const [stats, setStats] = useState({
    repos: 0,
    technologies: new Set(),
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/umairaltaf982/repos?per_page=100');
        const data = await res.json();

        const langSet = new Set();
        data.forEach(repo => {
          if (repo.language) langSet.add(repo.language);
        });

        setStats({
          repos: data.length,
          technologies: langSet,
        });
      } catch (err) {
        console.error("GitHub API error:", err);
      }
    };

    fetchGitHubData();
  }, []);

  return (
  <div className="github-stats-box">
    <h4>GitHub Snapshot</h4>

    <div className="stat-item">
      <label>Total Repositories: {stats.repos}</label>
      <meter
        min="0"
        max="100"
        value={stats.repos}
      ></meter>
    </div>

    <div className="stat-item">
      <label>Technologies Used: {stats.technologies.size}</label>
      <meter
        min="0"
        max="50"
        value={stats.technologies.size}
      ></meter>
    </div>
  </div>
);

};

export default GitHubStats;
